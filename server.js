import {connect} from './src/javascripts/config/db/connect'
import {Movie} from './src/javascripts/models/movie'

connect ("mongodb://localhost:27017/topmovies")

Movie.find().exec((err, movies) => {
    if(err){
        console.log(err)
    }else {
        console.log(movies)
    }
})