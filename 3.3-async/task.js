class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = timerId;
    }
    addClock(time, fn, id) {
        if (id === undefined) {
            throw new Error(`Передайте название звонка`);
        }
        const idfind = this.alarmCollection.find(alarm => alarm.id === id);
        if (idfind !== undefined) {
            console.error(`Такой звонок уже существует`);
            return;

        }
        const alarm = {
            id: id,
            time: time,
            callback: fn
        };
        this.alarmCollection.push(alarm);
    }
    removeClock(id) {
        const newAlarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
        if (newAlarmCollection.length === this.alarmCollection.length) {
            return false;
        }
        this.alarmCollection = newAlarmCollection;
        return true;
    }
    getCurrentFormattedTime() {
        const nowTime = new Date();
        const h = nowTime.getHours() < 10 ? `0${nowTime.getHours()}` : `${nowTime.getHours()}`;
        const m = nowTime.getMinutes() < 10 ? `0${nowTime.getMinutes()}` : `${nowTime.getMinutes()}`;
        return `${h}:${m}`;
    }
    start() {
        function checClock() {
            if (alarm.time === getCurrentFormattedTime()) {
                return alarm.callback();
            }
        }
        if (this.timerId === undefined) {
            return this.timerId = setInterval(this.alarmCollection.forEach(alarm => checClock(alarm)));
        }
    }
    stop() {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
            return this.timerId = undefined;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log(alarm.id, alarm.time));
    }
    clearAlarms() {
        stop();
        return this.alarmCollection = [];
    }

}


function testcase() {
    let clock = new AlarmClock();
    clock.addClock(`9:42`, () => console.log(`Вставай!!!`), 1);
    clock.addClock(`9:43`, () => {
        console.log(`Вставай!!! Проспишь!!!`);
        clock.removeClock(2)
    }, 2);
    clock.addClock(`9:44`, () => {
        console.log(`Вставай!!! Пора`);
        clock.stop();
        clock.clearAlarms();
        clock.printAlarms()
    }, 3);


}