import './Choosen.css'

const Choosen = () => {
    return (
        <div className='chosenBackground'>
            <div className="Choosen">
                <div className="choosenProducts">
                    <div className='choosenImg'></div>
                    <div className='nameAndPrice'>
                        <p className='choosenName'>name</p>
                        <div className='choosenPrice'>price</div>
                        <div>amount:</div>
                    </div>
                    <div className='btns' >
                    <div className='removeButton'>remove</div>
                    <div className='addButton'>Add</div>
                    </div>
                </div>




                <div>total price:</div>


            </div>
        </div>
    );
}
 
export default Choosen;