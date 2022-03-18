import CompB from './CompB';
let CompA = () => {
    let id = 101;
    let ename = "Rahul Gandhi"
    let loc = ['Noida', "Wayanad"]
    return <>
        <h2>Component A</h2>
        <hr />
        <CompB eid={id} ename={ename} eloc={loc} />
    </>
}
export default CompA;