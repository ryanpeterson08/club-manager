import { Pipe, PipeTransform } from '@angular/core';
import { Team } from './team.model';

@Pipe({
  name: 'position',
  pure: false
})
export class PositionPipe implements PipeTransform {

  transform(input: Team[], desiredPosition) {
    var output: Team[] = [];
    if(desiredPosition === "center") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "center") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPosition === "small forward") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "small forward") {
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredPosition === "point guard"){
      for(var i = 0; i < input.length; i++){
        if(input[i].position === "point guard"){
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredPosition === "shooting guard"){
      for(var i = 0; i < input.length; i++){
        if(input[i].position === "shooting guard"){
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredPosition === "power forward"){
      for(var i = 0; i < input.length; i++){
        if(input[i].position === "power forward"){
          output.push(input[i]);
        }
      }
      return output
    }else {
      return input;
    }
  }


}
