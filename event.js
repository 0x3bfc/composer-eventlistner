/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
const winston = require('winston');
var chalk = require('chalk');
let config = require('config').get('event-app');
let participantId = config.get('participantId');
let participantPwd = config.get('participantPwd');
const LOG = winston.loggers.get('application');

class SitechainListener{

	constructor() {

        	this.bizNetworkConnection = new BusinessNetworkConnection();
        	this.CONNECTION_PROFILE_NAME = config.get('connectionProfile');
        	this.businessNetworkIdentifier = config.get('businessNetworkIdentifier');
    	}


	init() {

        	return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, participantId, participantPwd)
      		.then((result) => {
          		this.businessNetworkDefinition = result;
          		//LOG.info(this.businessNetworkDefinition.getIdentifier());
      		})
      		// and catch any exceptions that are triggered
      		.catch(function (error) {
          		throw error;
      		});

    	}


	/** Listen for the sale transaction events
     	*/
     	listen(){
       		this.bizNetworkConnection.on('event',(evt)=>{
         		console.log(evt);
         		let options = {
           			properties: { key:'value'}
         	};
       });
     }


}



var lnr = new SitechainListener();
lnr.init();
lnr.listen()
