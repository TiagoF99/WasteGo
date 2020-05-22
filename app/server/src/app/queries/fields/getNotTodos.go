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

type todoStruct struct {
	NAME        string `json:"name"`
	DESCRIPTION string `json:"description"`
}

var GetNotTodos = &graphql.Field{
	Type:        graphql.NewList(types.NotTodo),
	Description: "Get all not todos",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		notTodoCollection := mongo.Client.Database("medium-app").Collection("Not_Todos")

		todos, err := notTodoCollection.Find(context.Background(), bson.M{})
		if err != nil {
			log.Fatal(err)
		}
		defer todos.Close(context.Background())
		var todosList []todoStruct
		for todos.Next(context.Background()) {
			var doc bson.M
			if err = todos.Decode(&doc); err != nil {
				log.Fatal(err)
			}
			fmt.Println(doc)

			// convert BSON to struct
			todo := todoStruct{}

			//finish later


			todosList = append(todosList, todo)
		}

		return todosList, nil
	},
}