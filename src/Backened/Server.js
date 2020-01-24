const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv').config();
const app = express();
var multer = require('multer')

// Middleware
app.use(bodyParser.json());
app.use(cors())

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;

connection.once('open',()=>
{
    console.log("MongoDB connection established sucessfully");
})

app.post('/upload/allopathic/anaesthesia',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/anaesthesia')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/anatomy',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/anatomy')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/cardiology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/cardiology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/dermatology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/dermatology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/ent',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/ent')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/neurosurgery',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/neurosurgery')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/obst',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/obst')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/ophthalmology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/ophthalmology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/orthopaedics',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/orthopaedics')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/paediatrics',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/paediatrics')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/surgery',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/surgery')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/allopathic/urology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/allopathic/urology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/anaesthesia',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/anaesthesia')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/anatomy',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/anatomy')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/cardiology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/cardiology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/dermatology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/dermatology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/ent',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/ent')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/neurosurgery',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/neurosurgery')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/obst',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/obst')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/ophthalmology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/ophthalmology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/orthopaedics',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/orthopaedics')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/paediatrics',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/paediatrics')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/surgery',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/surgery')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/homeopathic/urology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/homeopathic/urology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/anaesthesia',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/anaesthesia')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/anatomy',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/anatomy')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/cardiology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/cardiology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/dermatology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/dermatology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/ent',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/ent')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/neurosurgery',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/neurosurgery')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/obst',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/obst')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/ophthalmology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/ophthalmology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/orthopaedics',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/orthopaedics')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/paediatrics',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/paediatrics')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/surgery',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/surgery')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

app.post('/upload/ayurvedic/urology',function(req,res) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'ADMIN_WALLET/ayurvedic/urology')
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
      }
  })
    var upload = multer({ storage: storage }).single('file')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)
 })
});

const usersRouter = require('./Routes/User');
app.use('/hey',usersRouter)

app.listen(5000, () => {
    console.log("Server is listening at port 5000")
})