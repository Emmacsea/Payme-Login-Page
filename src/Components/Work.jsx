import style from '../App.module.css'
import logo from '../Images/Logo.png'
const Work = () => {
    return (
        <div className={style.body}>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={logo} alt="" />
                </div>

                <nav>
                    <ul>
                        <li>About</li>
                        <li>Features</li>
                        <li>Download</li>
                        <li>Support</li>
                        <li>
                            <select name="" id="">
                                <option value="partners">Partners</option>
                            </select>
                        </li>
                    </ul>

                </nav>

                <div className={style.link}>
                    <div className={style.sign}>
                        <a href="#">Sign In</a>

                    </div>
                    <div className={style.sign}>

                        <a href="#" className={style.up}>Sign Up</a>
                    </div>
                </div>

            </div>

            <div className={style.display}>
                <div className={style.displaym}>
                    <div className={style.ctl}>
                        <h2>Monitor balance Control Smart Life</h2>
                        <p>When the life too much things you need more than.
                            lets Peyme help your life to easier with smart payment.
                        </p>
                    </div>

                    <div>
                        <div>
                            <img src="" alt="" />
                            <p>take a trip</p>
                        </div>

                        <button>Get Started</button>
                    </div>

                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>

        </div>

    )
}

export default Work