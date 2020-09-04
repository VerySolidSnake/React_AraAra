import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faQuestion, faDotCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

const Navbar = ()=>{
  return (
    <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-sm  navbar-dark bg-dark my-sm-4 mb-sm-4" style={{width: '100%'}}>
              <a href="#" className="navbar-brand text-light"><b>Ara</b><FontAwesomeIcon icon={faDotCircle} size="xs" style={{color: '#ce2fd6'}}/><span style={{fontSize: '15px', fontWeight:'700'}}>Ara</span></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/">
                        <span className="nav-link">Home</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/about">
                      <span className="nav-link">About</span>
                    </Link>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown">Kings <FontAwesomeIcon size="sm" icon={faChevronDown}/></a>
                    <ul className="dropdown-menu navigation-nav bg-dark">
                      <li className="dropdown-item nav-item"><a className="nav-link" href="#">Tyler 1</a></li>
                      <li className="dropdown-item nav-item"><a className="nav-link" href="#">Shrek</a></li>
                      <li className="dropdown-item nav-item"><a className="nav-link" href="#">Markiplier</a></li>
                      <li className="dropdown-item nav-item"><a className="nav-link" href="#">Thanos</a></li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to="/contact">
                      <span className="nav-link">Contact</span>
                    </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
  );
}

const ImageSlider = ()=>{
  return (
    <div id="Karuzela" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#Karuzela" data-slide-to="0" className="active"></li>
        <li data-target="#Karuzela" data-slide-to="1" className=""></li>
        <li data-target="#Karuzela" data-slide-to="2" className=""></li>
        <li data-target="#Karuzela" data-slide-to="3" className=""></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./assets/slider1.jpg" alt="firstSlide" className="d-block w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h3>Lorem</h3>
            <p>Ipsum</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./assets/slider3.jpg" alt="firstSlide" className="d-block w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h3>Lorem</h3>
            <p>Ipsum</p>
          </div>
        </div>
        
        <div className="carousel-item">
          <img src="./assets/slider4.jpg" alt="firstSlide" className="d-block w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h3>Lorem</h3>
            <p>Ipsum</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./assets/slider2.jpg" alt="firstSlide" className="d-block w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#Karuzela" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a className="carousel-control-next" href="#Karuzela" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
}

const LinkButtons = ()=>{
  return (
    <div className="tileButtons my-4">
            <Link to="/"><div className="tile bg-primary">
             <span className="tile-icon" ><FontAwesomeIcon className="" size="3x" icon={faHome}/></span>
              <span className="tile-description"><h2>Home</h2></span>
            </div>
            </Link>

            <Link to="/contact"><div className="tile bg-danger">
              <span className="tile-icon"><FontAwesomeIcon className="" size="3x" icon={faEnvelope}/></span>
              <span className="tile-description"><h2>Contact</h2></span>
            </div>
            </Link>

            <Link to="/about">
            <div className="tile bg-info">
              <span className="tile-icon"><FontAwesomeIcon className="" size="3x" icon={faQuestion}/></span>
              <span className="tile-description"><h2>About</h2></span>
              </div>
            </Link>
          </div>
  )
}

const HomeContent = ()=>{
  return (
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar porta pellentesque. Ut vel massa non elit semper tempor semper non neque. Pellentesque tristique enim eget feugiat feugiat. Vestibulum faucibus libero leo, quis ullamcorper diam interdum ut. Curabitur lacus urna, ullamcorper a turpis vitae, rutrum dignissim nisl. Nulla sed posuere sapien. Quisque vitae tristique nibh. Aliquam nec nisi sit amet lorem blandit pharetra. Morbi quis fermentum velit, in bibendum enim. Donec ultrices condimentum pharetra. Donec lacinia libero eget diam bibendum, et semper erat ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras pulvinar a erat ut placerat.

Etiam sagittis, orci vel viverra suscipit, nunc tellus faucibus risus, eu pellentesque magna felis et diam. Ut pulvinar nunc nec justo posuere, eu tempus dui dignissim. In sodales urna eros, nec lobortis magna vestibulum eu. Morbi venenatis arcu sapien, non feugiat arcu vehicula quis. Phasellus malesuada diam eget mollis iaculis. Integer pretium ornare leo. Phasellus lorem felis, venenatis id sem ac, vestibulum blandit arcu.

Praesent bibendum accumsan auctor. Morbi molestie porttitor odio. Donec ac enim ac metus rhoncus malesuada vitae ornare ligula. Nullam at ligula ligula. Aenean ac porta tellus. Phasellus ante ipsum, rutrum quis lectus quis, sodales facilisis magna. Proin sed ligula a tortor sodales dignissim vitae a sapien.

Mauris hendrerit dolor id eros sagittis dictum. Quisque quis venenatis est. Sed sagittis felis a quam mollis posuere. Nam hendrerit ultrices arcu faucibus cursus. Nullam commodo quam id ultricies rhoncus. Etiam malesuada, mauris ut laoreet imperdiet, turpis velit efficitur massa, rhoncus scelerisque ipsum lacus ac lacus. Nunc id posuere augue, elementum accumsan enim.

Mauris viverra vitae lorem nec pharetra. Vestibulum ac lorem non nisi lobortis egestas id sed quam. Aenean ultricies sagittis accumsan. Praesent bibendum est et enim cursus iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer dictum blandit luctus. Duis egestas justo ac ligula elementum, sit amet imperdiet diam luctus. Sed quis ullamcorper dolor. Curabitur tempus magna sed laoreet viverra. Nulla in velit eget neque ultricies ultricies sit amet ut nulla. Quisque laoreet ipsum odio, eget iaculis turpis faucibus in. Vestibulum vel dolor vitae orci sollicitudin pulvinar et in lorem. Mauris quam tortor, aliquam ac consectetur rhoncus, varius eget nulla.

In in odio velit. Nullam vehicula ligula eu lacus condimentum, in laoreet lacus malesuada. Sed non condimentum tortor. Aenean vitae hendrerit nisl. Etiam non nulla tincidunt, vehicula tortor sed, laoreet turpis. Nunc interdum tincidunt risus, sit amet commodo eros rhoncus et. Quisque tortor metus, luctus eu viverra at, molestie sed nunc. Nulla maximus diam et mauris dictum, nec hendrerit tellus tincidunt. Ut blandit nisi non dolor finibus pellentesque. Integer sagittis felis tristique odio luctus accumsan. Aenean malesuada mollis justo. Nullam non varius leo. Etiam et ligula ut ligula congue blandit sed vitae velit. Proin sodales sit amet ex feugiat sollicitudin. Nullam volutpat lectus diam, et dignissim mauris viverra eget. Vestibulum sapien leo, venenatis at dui nec, pretium semper quam.

Suspendisse maximus lectus cursus volutpat feugiat. Proin vulputate congue magna, et feugiat urna dictum ut. Sed pharetra elit ut ultrices scelerisque. Morbi porta ut mi et dignissim. Vestibulum feugiat cursus magna, quis tincidunt metus iaculis in. Nulla iaculis augue a eros malesuada interdum. Proin in massa maximus, finibus nisi vel, interdum tortor. Donec at magna elementum augue ultrices facilisis eu id enim. Ut tempor volutpat vestibulum. In faucibus vehicula pharetra. Suspendisse bibendum a nibh nec fringilla. Aliquam at nunc accumsan nibh posuere vulputate. Etiam eget nisl maximus, ullamcorper justo et, efficitur nulla. Pellentesque porttitor lobortis orci, sit amet pharetra arcu finibus non.

Nulla tincidunt laoreet lectus in faucibus. Nunc sodales at ipsum ac gravida. Cras vehicula, erat sed cursus condimentum, justo purus pretium metus, vitae porttitor velit leo eget turpis. Quisque velit purus, eleifend et odio vitae, tempor pellentesque mauris. Nulla tempor lectus sollicitudin, lobortis neque non, suscipit odio. In tincidunt felis nec molestie bibendum. Nulla accumsan scelerisque vestibulum. Fusce id odio lacus. In in hendrerit sem. Suspendisse sit amet luctus mauris. Nullam aliquet, mauris sed molestie maximus, metus elit egestas lectus, quis ullamcorper neque tortor nec mi. Nam faucibus mi at gravida feugiat. Morbi fringilla consequat condimentum. Ut ac sem tincidunt, consequat nibh nec, condimentum urna.

Vestibulum eu elit at orci hendrerit gravida. Morbi eget augue porta, ornare ipsum id, iaculis sem. Integer interdum, tortor nec imperdiet aliquet, urna purus pulvinar enim, at imperdiet orci ex sit amet ligula. Suspendisse non diam tincidunt, interdum sapien commodo, dapibus lacus. Nullam et urna a tellus interdum fermentum vitae et nisl. Fusce luctus ligula ut fringilla ullamcorper. Nam vitae diam turpis. Curabitur molestie ultrices sodales. Nam congue lectus eu justo lacinia, ut euismod massa dapibus.

Donec fermentum pharetra felis id scelerisque. Sed sit amet libero non nisl venenatis fringilla. In hac habitasse platea dictumst. Aliquam id magna porttitor, aliquam augue a, sodales lectus. Phasellus congue augue quis velit mollis porta. Pellentesque accumsan lacinia arcu, nec condimentum eros finibus et. Curabitur convallis feugiat posuere. Phasellus lacinia turpis in rhoncus tincidunt.

Nulla viverra pharetra luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel mattis odio, ut egestas magna. Nam quis tortor neque. Aliquam ullamcorper est vel velit lacinia elementum. Sed eu pretium nisl. Fusce vitae luctus dolor, in semper augue. Nunc egestas quam id libero viverra pellentesque. Cras dictum justo augue, eget egestas urna malesuada sed. Fusce mi elit, maximus nec nisl id, placerat lobortis tortor. Maecenas ut viverra leo. Pellentesque pharetra hendrerit quam, quis elementum lorem sollicitudin a. Ut vel tortor fringilla, tincidunt nulla sit amet, venenatis ante. In ac mi eget mauris pretium cursus.

Duis sem enim, rhoncus et ante vitae, feugiat sollicitudin lorem. Aliquam turpis lectus, lacinia quis lorem eu, dictum tincidunt ipsum. Fusce ut eros magna. Aliquam sagittis suscipit massa et vehicula. Proin vestibulum lorem eu diam varius maximus. In hac habitasse platea dictumst. Pellentesque consectetur quam ut diam feugiat, sed suscipit diam faucibus. Curabitur eu massa at sapien posuere eleifend. Aenean a eleifend metus, non consectetur dui. Nam ullamcorper tortor ligula, a lobortis mauris finibus ac. Vivamus feugiat elit vitae libero pulvinar, eget elementum turpis suscipit. Sed consequat vehicula ligula, sed ullamcorper enim viverra ac. Quisque convallis feugiat ante sed dignissim. Fusce placerat faucibus dui, ut luctus leo imperdiet a.

In id pretium nisl. Ut ac tempus ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas condimentum urna vitae porta posuere. Nunc id fermentum tellus. Vivamus dapibus dapibus lorem porta mollis. Nulla ligula lacus, cursus vel eleifend et, semper feugiat purus. Phasellus porttitor urna sed diam pellentesque efficitur. Nulla ultricies, eros in hendrerit luctus, sapien mi ullamcorper est, quis maximus ipsum magna quis erat. In hac habitasse platea dictumst. Duis nec lobortis arcu.

Vivamus mollis tortor a nibh consectetur placerat. Aenean et finibus ex. Quisque ut consequat turpis. Pellentesque porta varius eros pulvinar varius. Curabitur sit amet volutpat turpis. Vivamus a erat vel sapien vestibulum commodo. Sed ut aliquam nibh, eget ornare elit. Donec auctor sem a neque placerat ullamcorper eu ac leo. Nulla dolor turpis, dictum a suscipit ut, semper eu purus.

Vestibulum finibus urna quis nunc luctus ullamcorper. Morbi ornare id est vel porttitor. Maecenas eros ante, congue in enim non, vehicula laoreet nunc. Phasellus sagittis lacinia mauris quis aliquet. Aliquam porta ullamcorper dolor non eleifend. Maecenas rutrum, dolor ut malesuada commodo, orci quam bibendum dui, at varius urna eros sed massa. Duis at sem at sem ultrices feugiat. Suspendisse in dapibus arcu, non elementum tellus. Ut nec cursus nisi. Phasellus nec malesuada ex, ac ullamcorper metus.

Nullam pellentesque at risus luctus varius. In vel vestibulum nisl. Curabitur eget est purus. Mauris semper efficitur ante ac dignissim. Integer ornare sapien in enim venenatis laoreet. Vivamus ut rhoncus sapien, at sollicitudin ex. Fusce nec enim ut dui pulvinar egestas id ut sem. Sed et ante lacinia, varius sapien at, faucibus justo. Nullam rutrum, metus eu vehicula tincidunt, augue diam dapibus sapien, a varius tellus mi vitae mi. Etiam placerat felis in felis vehicula, eget eleifend lorem commodo. Aliquam ante purus, malesuada eu lacus vel, laoreet lobortis sem. In condimentum augue eu leo bibendum, eget vestibulum elit faucibus.

In vel laoreet lectus. Duis eu neque congue, sagittis libero ac, mollis metus. Pellentesque ut placerat quam, sed rutrum risus. Curabitur felis ex, iaculis ac nibh in, facilisis cursus libero. Integer vitae rutrum erat. Phasellus nec sodales ex, quis luctus nisi. Duis non sem pharetra, porttitor nisl pellentesque, imperdiet justo. Duis aliquam erat at enim pretium, eu venenatis nunc mattis. Curabitur pellentesque gravida ultrices.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus gravida sapien non arcu placerat, at lacinia dui convallis. Sed porta consequat risus, ut convallis libero scelerisque gravida. Nam egestas mi justo, nec ultricies odio elementum non. Curabitur est risus, lobortis in faucibus vel, bibendum a risus. Aliquam tellus dui, auctor sed nisl quis, luctus condimentum sem. Quisque gravida nisl id sagittis maximus. Pellentesque molestie massa id lectus interdum congue. Pellentesque vulputate arcu quis ex dictum, et tempor justo posuere. Sed vitae facilisis ipsum. Donec condimentum nulla eu orci gravida, id pellentesque nunc euismod. Ut vitae orci nec urna tincidunt pretium ac a tellus.

Aliquam et vulputate turpis. Donec efficitur ex nec laoreet tristique. Aliquam at rhoncus arcu. Aliquam vehicula dolor ut erat semper faucibus. Cras at consectetur nibh, at porttitor purus. Pellentesque euismod, lorem in lobortis eleifend, est diam tristique ligula, vitae suscipit sapien magna mattis justo. Mauris pretium sem ut nisl convallis placerat. Praesent id libero eget sapien bibendum congue. Nulla non est ut massa fringilla tincidunt. Vivamus molestie accumsan erat quis lacinia.

Proin fringilla, ex ultrices dictum molestie, justo erat venenatis ex, eget volutpat felis lorem in justo. Nullam nec aliquam urna, et luctus elit. Ut venenatis tincidunt ante, a elementum purus vulputate ut. Cras cursus bibendum dui id varius. Vivamus at ligula eu magna maximus finibus vitae a leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam porttitor ipsum id velit viverra imperdiet. Morbi mattis, libero vel fringilla faucibus, quam tellus laoreet libero, nec dignissim lacus tellus vitae sapien. Donec ligula tortor, accumsan eu gravida a, gravida sit amet metus. Proin hendrerit eros eu mauris cursus, et pretium dui fringilla.</p>
  )
}
const AboutContent = ()=>{
  return (
    <div>dzial about</div>
  )
}
const ContactContent = ()=>{
  return (
    <div>dzial contact</div>
  )
}

const InfoContent = ()=>{
  return (
    <div className="col">
      <article className="text-justify">
        <Switch>
          <Route exact path="/">
            <HomeContent/>
          </Route>

          <Route path="/about">
            <AboutContent/>
          </Route>

          <Route path="/contact">
            <ContactContent/>
          </Route>
        </Switch>
      </article>
    </div>
    )
}

const Footer = ()=>{
  return (
      <div className="container">
        <div className="row">
          <footer className="col bg-dark px-0">
            <div className="Footer text-light p-3">
              <div>
                <h5 className="text-center pb-1">Lorem Ipsum Niggas</h5>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
              </div>
              <div>
                <h5 className="text-center pb-1">Lorem Ipsum Niggas</h5>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
              </div>
              <div>
                <h5 className="text-center pb-1">Lorem Ipsum Niggas</h5>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
              </div>
              <div>
                <h5 className="text-center pb-1">Lorem Ipsum Niggas</h5>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
                <a href="#" className="d-block text-center text-light">asdasd</a>
              </div>
            </div>
            <div>
                <p className="text-right text-light pr-4">@BigBonedBoss prawa zastrzeżone</p>
              </div>
          </footer>
        </div>
      </div>
  )
}

function Main() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <main>
        <Navbar/>
        <div id="font-wrapper" className="row justify-content-center mx-0">
          <div className="my-1 mb-1 mb-sm-4 col-3 col-sm-2 col-md-1 brand-icon-bg">
            <FontAwesomeIcon className="brand-icon text-decoration-none" size="3x" icon={faFacebook} color="#4267B2"/>
          </div>
          <div className="my-1 mb-1  mb-sm-4 col-3 col-sm-2 col-md-1 brand-icon-bg">
            <FontAwesomeIcon className="brand-icon" size="3x" icon={faInstagram} color="#8a3ab9"/>
          </div>
          <div className="my-1 mb-1 mb-sm-4 col-3 col-sm-2 col-md-1 brand-icon-bg">
            <FontAwesomeIcon className="brand-icon" size="3x" icon={faTwitter} color="#1da1f2"/>
          </div>
          <div className="my-1 mb-1 mb-sm-4 col-3 col-sm-2 col-md-1 brand-icon-bg">
            <FontAwesomeIcon className="brand-icon" size="3x" icon={faSnapchat} color="#fffc00"/>
          </div>
          </div>
          <div id="articleCont" className="container bg-light py-4">
            <ImageSlider/>
            <LinkButtons/>
            <hr/>
            <InfoContent/>
            <hr/>
          </div>
          <Footer/>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default Main;
