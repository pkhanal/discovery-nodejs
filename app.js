/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express');
const app = express();

const queryBuilder = require('./query-builder');

/*
import watson-developer-cloud/discovery/v1
instantiate discovery
*/


// Bootstrap application settings
require('./config/express')(app);

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/api/query', (req, res, next) => {
  console.log(req.body);
  /*
    Query using discovery api
  */
});

// error-handler settings
require('./config/error-handler')(app);

module.exports = app;
