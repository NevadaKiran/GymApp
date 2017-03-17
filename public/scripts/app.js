
angular.module('gym-app')
.controller('WorkoutController', WorkoutController)


function WorkoutController($http, $scope){
  var controller = this;
  // $scope.weekData = [];
  // this out here is workout controller

  function week(){
    $http.get('/workouts')
    .then(function (allWorkouts) {
        console.log(allWorkouts.data);
        // this in here actually refers to $http
        // controller.weekData = response.data;
        $scope.weekData = allWorkouts.data;
      })
  }

  function saveWorkout(editedDay){
    console.log('add workout')
    console.log(editedDay);
    //if there is an id, we wanta put(edit) else, post(add)
      if (!editedDay._id) {
          // add
          $http.post('/workouts', editedDay)
              .then(function (newWorkout) {
                  console.log(newWorkout.data, "responsedata");
                  console.log($scope.weekData, "weekData");
                  $scope.weekData.push(newWorkout.data)
                  // controller.addWorkout = response.data;
                  // console.log(response.data._id);

              })
      } else {
          // edit
          $http.put('/workouts/' + editedDay._id, editedDay)
              .then(function (newWorkout) {
                  /* after edit // find the edited id update the index*/
                  $scope.weekData.forEach(function (day, i) {


                      if (editedDay._id === day._id) {
                          $scope.weekData[i] = newWorkout.data;

                          console.log("scope", $scope.weekData[i]);
                          console.log("newOne", newWorkout.data);

                      }
                  });
              });
      }
  }


  function isIndex(element) {
    return element >= 15;
  }
  function deleteWorkout(id){
    console.log("DELETE");
   $http.delete(`/workouts/${id}`)
   .then(function(deletedWorkout){
      //  console.log("deleted", deletedWorkout.data);

      var deletedId = deletedWorkout.data._id;

      $scope.weekData.forEach(function(parameters) {
          var i = parameters.i;
          var day = parameters.day;
      if (deletedId === day._id) {
        // delete $scope.weekData[i];
        $scope.weekData.splice(i, 1);
        }
      });
    })
  }
  /**
  * this populates the form fields.
  **/
  function editWorkout(parameters){
      var editedDay = parameters.editedDay;
    $scope.editableDayFields = angular.copy(editedDay);
    console.log('edit')
  }

  this.saveWorkout = saveWorkout
  this.editWorkout = editWorkout;
  this.deleteWorkout = deleteWorkout;
  this.week = week;
  // this.addWorkout = addWorkout;
}



/**
* this talks the html and is told what edit
**/
function editWorkout(day){
  $scope.day = day;
  console.log('edit')

}

// function addWorkout(day){
//     console.log();
//   $http.post('/workouts' )
//   .then(function(response){
//       console.log(response.data);
//       var post = response.data
//
//     controller.addWorkout = response.data;
//
//     console.log(response.data._id);
//     // $scope.post.push({day: $scope.day,
//     //   warmup: $scope.warmup, heavy: $scope.heavy, cooldown: $scope.cooldown})
//   })
// }


// $scope.addWorkout = function(){
//   $scope.workouts.push({day: $scope.day });
// }

// console.log("controller.fitWeek");
//   controller.fitWeek.push(newWorkout);
//   console.log(controller.fitWeek);
//   console.log("createWorkout");

//
// function workoutById(req, res){
//     console.log("workoutById ");
//     console.log(this);
//
//     // controller.fitDay = response.data;
//       })


// $scope.fitDay.push({day: $scope.day});
// scope data is the view.
// $scope.weekData.forEach(function(day) {
//  if(deletedWorkout.data._id === day._id) {
//    delete day;
//    return;
//  }    //delete
// });
