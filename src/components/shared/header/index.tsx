import Discord from '../../images/Discord.svg'
import Logo from '../../images/Logo.svg'
import Subtract from '../../images/Subtract.svg'
import Twitter from '../../images/Twitter.svg'
import './index.scss'
export default function Header() {
	return (
		<div className='header'>
			<div className='container'>
				<div className='left_content'>
					<img src={Logo} alt="" />
				</div>
				<div className='right_content'>
					<button>
						<img src={Discord} alt="" />
					</button>
					<button>
						<img src={Subtract} alt=""/>
					</button>
					<button>
						<img src={Twitter} alt=""/>
					</button>
				</div>
			</div>
		</div>
	)
}