import { Component } from 'angular2/core'
import { ArtistItemComponent } from './artist-item.component'
import { Artist } from './artist'


@Component({
   selector: 'artist-details',
   templateUrl: 'partials/artistdetails.html',
   inputs:['artist']
})

export class ArtistDetailsComponent{}