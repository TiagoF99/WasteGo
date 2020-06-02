package mongo

import (
	"context"

	"github.com/mongodb/mongo-go-driver/mongo"
)

// export Client variable
var Client, err = mongo.Connect(context.Background(), "mongodb+srv://admin-user:software99@wastego-g8clz.mongodb.net/test?retryWrites=true&w=majority", nil)
