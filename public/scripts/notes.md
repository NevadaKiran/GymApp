```js
function WorkoutController($http){
  function test(){
    console.log("so far so good");

  $http.get('/workouts')
  .then(function (response) {
          console.log(response);
          self.fitWeek = response.data;
          console.log(fitWeek);
          // res.render(fitWeek)
        })
        // $scope.test = fitWeek
}
          // console.log(workout);
         //  this.workouts = fitWeek;
         //  this.show = function(workout){
         //   this.workout = workout;
         // };
        // console.log("fitWeek");

```

# HTTP Requests in Unit 2

In unit 2 we did server side rendereing hbs and express

html form => get/post requestion => to the express server

We made http requests using the browser

```html
<form method="get" action="/users" >
</form>

```

## postman

Postamn is acting as the fronend to make requests to the backend

makes http requests to a route

## $http

$http is a service provided by angular to make http requests to s*some server* somewhere
