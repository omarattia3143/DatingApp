export class ValueModel {
  id: number;
  name: string;
  constructor(response: any) {
    this.id = response.id;
    this.name= response.name;
  }

}
