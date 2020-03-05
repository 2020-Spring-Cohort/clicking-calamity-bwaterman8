class ClickCount {
    constructor() {
        this.companionCost = 50;    
        this.clickCount = 0;
    }

    countClick() {
        this.clickCount++;
    }

    clickCompanionCount() {
        return 0;
    }
    clickCompanion() {
        this.clickCount++;
    }
    clickCompanionPurchase() {
       this.clickCount -= this.companionCost;
    }
}