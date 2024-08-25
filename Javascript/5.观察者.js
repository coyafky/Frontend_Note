class EventBus{
    constructor(){
        this.events = {};
    }
    on(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    once(eventName, callback){
        const onceCallback =(...args)=>{
            callback(...args);
            this.off(eventName, onceCallback);
        };
        this.on(eventName, onceCallback);
    }

    off(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName] = this.events[eventName].filter(
                cb => cb !== callback
            );
        }
    }
    emit(eventName, ...args) {
        if (this.events[eventName]) {
          this.events[eventName].forEach(callback => {
            callback(...args);
          });
        }
      }
}

// 示例用法
const eventBus = new EventBus();

const callback1 = (data) => {
  console.log('Callback 1:', data);
};

const callback2 = (data) => {
  console.log('Callback 2:', data);
};

eventBus.on('update', callback1);
eventBus.once('update', callback2);

eventBus.emit('update', 'Data 1');
// Output:
// Callback 1: Data 1
// Callback 2: Data 1

eventBus.emit('update', 'Data 2');
// Output:
// Callback 1: Data 2