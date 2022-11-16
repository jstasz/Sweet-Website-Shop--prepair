import { Injectable } from "@angular/core";
import { Cake } from "./desig-element.model";

@Injectable({
    providedIn: 'root'
})
export class CakeService {

    selectedType: string = '';
    selectedSize: string = '';
    selectedFlavour: string = '';
    selectedColor: string = '';
    selectedDetails: string[] = [];

    createCake() {
        const cake = new Cake(
            this.selectedType,
            this.selectedSize,
            this.selectedFlavour,
            this.selectedColor,
            this.selectedDetails)
    }

    getType(type: string) {
        this.selectedType = type;
    }

    getSize(size: string) {
        this.selectedSize = size;
    }

    getFlavour(flavour: string) {
        this.selectedFlavour = flavour;
    }

    getColor(color: string) {
        this.selectedColor = color;
    }

    getDetails(details: string[]) {
        this.selectedDetails = details
    }
}