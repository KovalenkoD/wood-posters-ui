import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], property: any, descending?: boolean): any {
    if (!value || value.length === 0 || !property || property == 0) {
      return value;
    }

    let propertyAndDescending = property.split(":");
    let propertyName = propertyAndDescending[0];
    let descendingValue = propertyAndDescending[1] === 'true';
    value.sort((first: any, second: any): number => {
      return first[propertyName] > second[propertyName] ? 1 : -1;
    });

    if (descendingValue) {
      return value.reverse();
    }

    return value;
  }
}
