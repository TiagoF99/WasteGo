package queries

import (
	"context"
	"log"

	"github.com/graphql-go/graphql"
	"github.com/mongodb/mongo-go-driver/bson"

	"app/data"
	types "app/types"
)

type userStruct struct {
	USERNAME string `json:"username"`
	PASSWORD string `json:"password"`
}

var GetUsers = &graphql.Field{
	Type:        graphql.NewList(types.User),
	Description: "Get all Users",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		userCollection := mongo.Client.Database("wastego").Collection("user")

		users, err := userCollection.Find(context.Background(), bson.M{})
		if err != nil {
			log.Fatal(err)
		}
		defer users.Close(context.Background())
		var usersList []userStruct
		for users.Next(context.Background()) {
			var doc bson.M
			if err = users.Decode(&doc); err != nil {
				log.Fatal(err)
			}

			// convert BSON to struct
			user := userStruct{
				USERNAME: doc["username"].(string),
				PASSWORD: doc["password"].(string),
			}

			//finish later

			usersList = append(usersList, user)
		}

		return usersList, nil
	},
}
