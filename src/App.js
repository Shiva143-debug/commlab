import './App.css'
import { Component } from 'react'
import Popup from 'reactjs-popup'

import { IoMdCheckmarkCircleOutline, IoMdClose } from 'react-icons/io'

import { BsPeopleFill } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import RegisterForm from './RegisterForm'
import { Dialog } from 'primereact/dialog';

import 'primereact/resources/themes/saga-blue/theme.css'; // or any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    BusinessEmail: '',
    PhoneNumber: '',
    showFirstNameError: false,
    showLastNameError: false,
    showBusinessError: false,
    showPhoneError: false,
    isFormSubmitted: false,
    showForm: false
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({ isFormSubmitted: false, firstName: '', lastName: '' })
  }

  onChangeFirstName = event => {
    this.setState({ firstName: event.target.value })
  }

  onChangeBusinessMail = event => {
    this.setState({ BusinessEmail: event.target.value })
  }

  onChangePhoneNumber = event => {
    this.setState({ PhoneNumber: event.target.value })
  }

  validateFirstName = () => {
    const { firstName } = this.state
    return firstName !== ''
  }

  validateBusinessMail = () => {
    const { BusinessMail } = this.state
    return BusinessMail !== ''
  }

  validatePhoneNumber = () => {
    const { PhoneNumber } = this.state
    return PhoneNumber !== ''
  }

  onChangeLastName = event => {
    this.setState({ lastName: event.target.value })
  }

  validateLastName = () => {
    const { lastName } = this.state
    return lastName !== ''
  }

  BlurFirstName = () => {
    const validateFirstName = this.validateFirstName()
    this.setState({ showFirstNameError: !validateFirstName })
  }

  BlurBusinessMail = () => {
    const validateBusinessMail = this.validateBusinessMail()
    this.setState({ showBusinessError: !validateBusinessMail })
  }

  BlurPhone = () => {
    const validatePhoneNumber = this.validatePhoneNumber()
    this.setState({ showPhoneError: !validatePhoneNumber })
  }

  BlurLastName = () => {
    const validateLastName = this.validateLastName()
    this.setState({ showLastNameError: !validateLastName })
  }

  formSubmit = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    const isValidBusinessMail = this.validateBusinessMail()
    const isValidPhoneNumber = this.validatePhoneNumber()

    if (
      isValidFirstName &&
      isValidLastName &&
      isValidBusinessMail &&
      isValidPhoneNumber
    ) {
      this.setState({ isFormSubmitted: true })
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        showBusinessError: !isValidBusinessMail,
        showPhoneError: !isValidPhoneNumber,
        isFormSubmitted: false,
      })
    }
  }

  renderSuccessCard = () => (
    <div className="Success-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="success-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  showForm = () => {
    this.setState({ showForm: true })
  }

  onHideDialogue = () => {
    this.setState({ showForm: false })
  }
  render() {
    const {
      firstName,
      lastName,
      BusinessEmail,
      PhoneNumber,
      showFirstNameError,
      showLastNameError,
      showBusinessError,
      showPhoneError,
      isFormSubmitted,
    } = this.state

    const className = showFirstNameError ? 'input-bg' : ''
    const className2 = showLastNameError ? 'input-bg' : ''
    const className3 = showBusinessError ? 'input-bg' : ''
    const className4 = showPhoneError ? 'input-bg' : ''
    return (
      <div className="main-container">
        {/* <p className="head">
          &quot;Some people call this artificial intelligence, but the reality
          is this technology will enhance us. So, instead of artificial
          intelligence, I think we’ll augment our intelligence” - Ginni Rometty
          – Former CEO & President, IBM
        </p> */}
        <div className="start">
          <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1698918138/corporate-training-with-ai-banner-image_za73vq.webp" alt="any" className="lady-image" />
          <div className="box">
            <p>The Top Trending Topic of the Year</p>
            <h1 className="c-h1">Unleashing the Potential of AI in Corporate Training</h1>
            <hr />
            <div className="i-t">
              <IoMdCheckmarkCircleOutline className="icon" />
              <p>Learn how AI is helping corporates upskill and reskill workforce</p>
            </div>
            <div className="i-t">
              <IoMdCheckmarkCircleOutline className="icon" />
              <p>Walk away with tips, tools, and resources to get started with AI-empowered training</p>
            </div>
            <p className="b">JOIN DR RK Prasad, Shalini, Rajesh LIVE</p>
            <p>Tuesday, January 09, 2024 <br />11 AM Eastern | 8 AM Pacific <br />Duration: 90 Minutes <br /><s>$997 VALUE </s> <span>FREE!</span></p>
            <button className="trigger-button-1" type="button" onClick={this.showForm}><BsPeopleFill className="people" /> SECURE YOUR SEAT</button>
          </div>
        </div>

        <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1698919215/logos-v2_ebonn5.webp" alt="b" className="logos" />
        
        <div className="d">
          <h1 className="learn">YOU WILL LEARN:</h1>
          <div className="flex">
            <IoMdCheckmarkCircleOutline className="icon" />
            <p>Evolution of AI and Corporate Training</p>
          </div>
          <div className="flex">
            <IoMdCheckmarkCircleOutline className="icon" />
            <p>
              How AI can close skills gaps with rapid upskilling and reskilling
            </p>
          </div>
          <div className="flex">
            <IoMdCheckmarkCircleOutline className="icon" />
            <p>Steps to integrate AI tools in training programs</p>
          </div>
          <div className="flex">
            <IoMdCheckmarkCircleOutline className="icon" />
            <p>Challenges and opportunities with AI implementation</p>
          </div>
          <div className="flex">
            <IoMdCheckmarkCircleOutline className="icon" />
            <p>Roadmap to align training with business goals</p>
          </div>
          <div className="flex">
            <IoMdCheckmarkCircleOutline className="icon" />
            <p>
              Live action – creating assets with Vyond Go, Synthesia, Quizbot
            </p>
          </div>
          <div className="flex">
            <IoMdCheckmarkCircleOutline className="icon" />
            <p>Best way Learning Architects can use AI</p>
          </div>
          <h1 className="d-h1">
            Unleashing the Potential of AI in Corporate Training
          </h1>
          <p className="d-p2">
            The Impact of AI on L&D – Insights and Applications
          </p>
          <p className="d1-p1">
            Tuesday, January 09, 2024 <br />
            11 AM Eastern | 8 AM Pacific <br />
            Duration: 90 Minutes <br />
          </p>

         <button className="trigger-button" type="button" onClick={this.showForm}><BsPeopleFill className="people" /> SECURE YOUR SEAT <br /> <s>$997 VALUE</s> - FREE! </button></div>

        <div className="e">
          <h1 className="hosts">MEET YOUR HOSTS</h1>
          <div className="cards">
            <div className="s-card">
              <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1698923595/rk-prasad-ai-webinar_scdrac.webp" alt="pi" className="picture" />
              <h3>RK Prasad</h3>
              <h4>CEO & Co-Founder</h4>
              <i>
                RK has nurtured CommLab India from concept to commercial
                success, and is responsible for formulating the business
                strategy. He is also responsible for nurturing customer
                relationships.
              </i>
              <i>
                An entrepreneur at heart, RK has 35 years of experience in
                Sales, Corporate training, University teaching, and eLearning.
                He regularly conducts seminars and webinars for customers across
                the world on various topics of technology-enhanced learning.
              </i>
              <i>
                RK holds a PhD in Mobile Learning from Lancaster University, UK,
                and an MBA.
              </i>
              <p>
                A good teacher and engaging trainer, RK helps people learn and
                bloom. His priorities are his employees, his customers, and his
                community.
              </p>
            </div>
            <div className="s-card">
              <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1698923617/Shalini_lzdsps.webp" alt="pi" className="picture" />
              <h3>Shalini Merugu</h3>
              <h4>Director - Learning Solutions</h4>
              <i>
                Shalini is a versatile learning design professional with 16+
                years of experience in instructional design (ILT, VILT, and
                eLearning).
              </i>
              <i>
                Her experience in designing eLearning solutions along with
                designing and delivering instructor-led training helps her
                leverage the strengths of each medium to consistently create
                impactful training solutions, ensuring that nothing is lost when
                converting from one format to another.
              </i>
              <i>
                Apart from improving the quality of learning solutions, she also
                conducts customer education workshops at customer sites globally
                and presents webinars on learning design.
              </i>
            </div>

            <div className="s-card">
              <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1698923635/rajesh-v4_xhctbc.webp" alt="pi" className="picture" />
              <h3>Rajesh Venkata</h3>
              <h4>Director – Innovation</h4>
              <i>
                Rajesh started his career as a Quality Executive in 2008, and
                gained expertise in eLearning, digital content delivery, and
                project management, over these 15+ years.
              </i>
              <i>
                Rajesh has an excellent track record of team management and
                operational planning, along with good knowledge of eLearning
                authoring tools such as Storyline, Captivate, and Lectora.
              </i>
              <i>
                Well-experienced in managing multiple projects for global
                clients, Rajesh has a keen eye for trends in the tech-enabled
                learning space. This made him the natural choice for the current
                role, where he researches the latest tools and tech, and guides
                the CommLab India team in leveraging them to address training
                needs faster, better, and er.
              </i>
            </div>
          </div>
        </div>

        <div className="f">
          <h1 >
            Unleashing the Potential of AI in Corporate Training
          </h1>
          <h3>The Impact of AI on L&D – Insights and Applications</h3>
          <h4>
            Tuesday, January 09, 2024
            <br />
            11 am Eastern | 8 am Pacific
            <br />
            Duration: 90 Minutes
          </h4>
          <button className="trigger-button" type="button" onClick={this.showForm}><BsPeopleFill className="people" /> SECURE YOUR SEAT <br /> <s>$997 VALUE</s> - FREE! </button>

        </div>

        <div className="g">
          <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1698924939/cl-logo-final-white_xvjdoj.webp" alt="d" />
          <div className="flexed">
            <p>Copyright © 2023, CommLab India</p>

            <p className="privacy">Privacy Policy | Site Map</p>
          </div>
        </div>

        <Dialog visible={this.state.showForm} className='dialogue' onHide={this.onHideDialogue} >
          <RegisterForm close={this.onHideDialogue} />
        </Dialog>

      </div>
    )
  }
}
export default App
