import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'space'
})
export class SpacePipe implements PipeTransform {
    transform(value: string) {
        return value.replace('-', ' ')
    }
}