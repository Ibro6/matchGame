import AbstractView from "./abstractView";

export default class extends AbstractView {
    constructor(params: any) {
        super(params);
        this.setTitle("Game setting");
    }
    changed(){
        console.log("change");
        
    }
    async getHtml() {
        return `
            <div class="card w-75 mx-auto mt-5">
                <div class="card-body">
                    <h5 class="card-title">Settings</h5>
                    <label >Game Cards</label> <br>
                    <select id="cardstypeid" class="custom-select custom-select-lg mb-3 w-25">
                        <option selected>Select game cards type</option>
                        <option value="animal">Animal</option>
                        <option value="fruit">Fruit</option>
                    </select> <br>
                    <label>Difficulty</label> <br>
                    <select id="cardsnumberid" class="custom-select custom-select-lg mb-3 w-25">
                        <option selected>Select game type</option>
                        <option value="4">4X4</option>
                        <option value="6">6X6</option>
                        <option value="8">8X8</option>
                    </select>
                    
                </div>
            </div>
        `;
    }
}