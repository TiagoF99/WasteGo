package mongo

import (
	"context"

	"github.com/mongodb/mongo-go-driver/mongo"
)

// export Client variable
var Client, err = mongo.Connect(context.Background(), "<credential>", nil)
