class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        };
        for(let i = 0; i < this.alarmCollection.length; i += 1) {
            if (this.alarmCollection.some(item => item.time === time)) {
                console.warn('Уже присутствует звонок на это же время')
            };
            break;
        };
        let alarmToAdd = {
            time,
            callback,
            canCall: true
        };
        this.alarmCollection.push(alarmToAdd)
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time)
    }

    getCurrentFormattedTime() {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, 0);
        const minutes = date.getMinutes().toString().padStart(2, 0);
        return `${hours}:${minutes}` 
    }

    start() {
        if(this.intervalId) {
            return
        };

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((item) => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall) {
                    item.canCall = false;
                    item.callback()
               }
            })
        }, 1000)
    }
    
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((item) => item.canCall = true)
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
};

