declare module TheType{
    function getContext(): Context;

    interface Context {
        name: string;
    }
}

export default TheType;