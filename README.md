# composer-eventlistner
Sample Fabric composer listener

* Installation

Install Hyperledger fabric and fabric composer from [here](https://hyperledger.github.io/composer/installing/development-tools.html) 

* Sample Asset composer app

Use the below link to create a sample asset management app on fabric composer: https://hyperledger.github.io/composer/tutorials/developer-guide.html

- execute the following command to generate rest APIs

```
	composer-rest-server -p hlfv1 -n my-network -i admin -s adminpw -N never -P 3000
```

* Run event handler:
```
	cd composer-eventlistner/
	npm install
	node event.js
```

From rest APIs <code>http://localhost:3000/explorer</code> create participants, asset, then run update the asset value using transaction api to get the event where each event can be handled from transaction processor as follows:
```
	    // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.acme.sample', 'SampleEvent');
            event.asset = tx.asset;
            event.oldValue = oldValue;
            event.newValue = tx.newValue;
            emit(event);
```


* sample output:

```
ValidatedResource {
  '$modelManager': 
   ModelManager {
     modelFiles: 
      { 'org.hyperledger.composer.system': [Object],
        'org.acme.sample': [Object] } },
  '$namespace': 'org.acme.sample',
  '$type': 'SampleEvent',
  '$identifier': '772080bb-0a31-4483-9f08-8c7a13a123b4#0',
  '$validator': ResourceValidator { options: {} },
  eventId: '772080bb-0a31-4483-9f08-8c7a13a123b4#0',
  timestamp: 2017-09-06T10:12:09.997Z,
  asset: 
   Relationship {
     '$modelManager': ModelManager { modelFiles: [Object] },
     '$namespace': 'org.acme.sample',
     '$type': 'SampleAsset',
     '$identifier': '123',
     '$class': 'Relationship' },
  oldValue: '78',
  newValue: '783' }
```

