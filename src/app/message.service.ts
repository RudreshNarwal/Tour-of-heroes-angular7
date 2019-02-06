// MessagesComponent which displays that message.
//Services are a great way to share information among classes
import { Injectable } from '@angular/core';

//@Injectable() decorator accepts a metadata object for the service
@Injectable({
  providedIn: 'root',
})
/*When you provide the service at the root level, Angular creates a single, 
shared instance of HeroService and injects into any class that asks for it. 
Registering the provider in the @Injectable metadata also allows Angular to 
optimize an app by removing the service if it turns out not to be used after all. */

export class MessageService {
  /* The service exposes its cache of messages and two methods: one to add()
   a message to the cache and another to clear() the cache.*/
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
//Inject it into the HeroService