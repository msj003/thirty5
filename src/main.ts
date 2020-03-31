import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
<<<<<<< HEAD
// import Amplify from 'aws-amplify';
// import awsmobile  from '../awsmobilejs/#current-backend-info/aws-exports';
// Amplify.configure(awsmobile);
=======
import Amplify from 'aws-amplify';
import awsmobile  from '../awsmobilejs/#current-backend-info/aws-exports';
Amplify.configure(awsmobile);
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
