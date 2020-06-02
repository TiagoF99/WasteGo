package mutations

import (
	types "app/types"
	"context"
	
	"app/data"
	"github.com/graphql-go/graphql"
)

type userStruct struct {
	USERNAME string `json:"username"`
	PASSWORD string `json:"password"`
}

var CreateUser = &graphql.Field{
	Type:        types.User,
	Description: "Create a user",
	Args: graphql.FieldConfigArgument{
		"username": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
		"password": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
	},

	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		// get our params
		username, _ := params.Args["username"].(string)
		password, _ := params.Args["password"].(string)
		notTodoCollection := mongo.Client.Database("wastego").Collection("user")
		_, err := notTodoCollection.InsertOne(context.Background(),
			map[string]string{"username": username, "password": password})
		if err != nil {
			panic(err)
		}
		return userStruct{username, password}, nil
	},
}
