package queries

import (
	"context"

	"github.com/graphql-go/graphql"
	"github.com/mongodb/mongo-go-driver/bson"

	"app/data"
)


var CheckUnique = &graphql.Field{
	Type: graphql.Boolean,
	Description: "check if username is unique",
	Args: graphql.FieldConfigArgument{
		"username": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
	},
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {
		username, _ := params.Args["username"].(string)
		userCollection := mongo.Client.Database("wastego").Collection("user")
		ctx := context.Background()
		obj, err2 := userCollection.Find(ctx, bson.M{"username": username})
		if err2 != nil {panic(err2)}
		count := 0
		defer obj.Close(ctx)
		for obj.Next(ctx) {
			count++
		}
		if count == 0 {
			return true, nil
		} else {
			return false, nil
		}
	},
}
