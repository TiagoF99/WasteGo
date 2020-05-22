package queries

import (
	"context"
	"fmt"
	"log"

	"github.com/graphql-go/graphql"
	"github.com/mongodb/mongo-go-driver/bson"

	"app/data"
	types "app/types"
)

type userStruct struct {
	USERNAME        string `json:"username"`
	PASSWORD string `json:"password"`
}

var GetUsers = &graphql.Field{
	Type:        graphql.NewList(types.User),
	Description: "Get all Users",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		notTodoCollection := mongo.Client.Database("").Collection("")

		users, err := notTodoCollection.Find(context.Background(), bson.M{})
		if err != nil {
			log.Fatal(err)
		}
		defer users.Close(context.Background())
		var usersList []todoStruct
		for users.Next(context.Background()) {
			var doc bson.M
			if err = users.Decode(&doc); err != nil {
				log.Fatal(err)
			}
			fmt.Println(doc)

			// convert BSON to struct
			user := userStruct{}

			//finish later


			usersList = append(usersList, user)
		}

		return usersList, nil
	},
}
