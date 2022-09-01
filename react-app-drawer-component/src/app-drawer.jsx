import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ isOpen: true });
  }

  hide() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
    <div>
      <img className='hero-image'src="../src/images/op-crew.png" alt="" />
      <div>
        <i onClick={this.show} className="fa-solid fa-bars"></i>
        <div onClick={this.hide} className={this.state.isOpen ? 'container modal' : 'container'}></div>
      </div>
      <div className={this.state.isOpen ? 'drawer' : 'drawer hidden'}>
        <div className='flex-container-title'>
          <h1>WANTED</h1>
        </div>
        <nav>
        <div className='flex-container'>
          <div>
            <h3 onClick={this.hide}>Luffy</h3>
            <p>He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters.
              His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Gol D. Roger.
              He believes that being the Pirate King means having the most freedom in the world.</p>
          </div>
          <img className='poster' src="../src/images/luffy.webp" alt="" />
        </div>
        <div className='flex-container'>
          <div>
            <h3 onClick={this.hide}>Zoro</h3>
            <p>As a master of Three Sword Style, a swordsmanship style which he created during his childhood training in Shimotsuki Village,
              Zoro is among the three most powerful combatants of the Straw Hats, alongside Luffy and Sanji.
              His dream is to become the greatest swordsman in the world,
              in order to honor a promise he made to his deceased childhood friend Kuina.</p>
          </div>
          <img className='poster' src="../src/images/zoro.webp" alt="" />
        </div>
        <div className='flex-container'>
          <div>
          <h3 onClick={this.hide}>Nami</h3>
            <p>
              She was formerly a member of the Arlong Pirates and initially joined the Straw Hats so that she could rob them in order to buy back her village from Arlong.
              However, she legitimately joined the Straw Hats after they rebelled against and defeated Arlong.
              Her dream is to make a map of the entire world.
            </p>
          </div>
          <img className='poster' src="../src/images/nami.webp" alt="" />
        </div>
        <div className='flex-container'>
          <div>
          <h3 onClick={this.hide}>Usopp</h3>
            <p>After working with the Straw Hats to defeat Kuro and the Black Cat Pirates, he was invited to join the crew.
              Despite his usual cowardice, Usopp dreams of becoming a brave warrior of the sea just like his father and lives every day in pursuit of living up to this dream.</p>
          </div>
          <img className='poster' src="../src/images/usopp.webp" alt="" />
        </div>
        <div className='flex-container'>
          <div>
             <h3 onClick={this.hide}>Sanji</h3>
             <p>Born as the third son and fourth child of the Vinsmoke Family, he disowned his family twice, once in his youth and again after reuniting with them as an adult.
               After fleeing the Vinsmokes as a child, he eventually entered the care of Zeff as the sous chef of the Baratie,
               where he would remain until he met Monkey D. Luffy, who convinced him to join his crew.</p>
          </div>
          <img className='poster' src="../src/images/sanji.webp" alt="" />
        </div>
        <div className='flex-container'>
          <div>
            <h3 onClick={this.hide}>Chopper</h3>
            <p>Chopper is a reindeer that ate the Hito Hito no Mi, a Devil Fruit that allows its user to transform into a human hybrid or a human at will.
              He came from Drum Island and was taught how to be a doctor by his two parental figures, Doctors Hiriluk and Kureha.
              His dream is to one day become a doctor capable of curing any disease and wants to travel all across the world specifically in the hopes of accomplishing this dream.</p>
          </div>
          <img className='poster' src="../src/images/chopper.webp" alt="" />
        </div>
        <div className='flex-container'>
          <div>
          <h3 onClick={this.hide}>Nico Robin</h3>
          <p>Robin ate the Hana Hana no Mi at a young age,
            giving her the power to reproduce her body parts or her entire body on any surface at will.
            As the sole survivor of the destroyed West Blue island Ohara, she is currently one of only two people in the world known to have the ability to read and decipher Poneglyphs,
            a skill which is considered forbidden and threatening to the World Government.</p>
          </div>
          <img className='poster' src="../src/images/nicorobin.webp" alt="" />
        </div>
        <div className='flex-container'>
          <div>
          <h3 onClick={this.hide}>Franky</h3>
            <p>Born Cutty Flam,he chose to go by his nickname of Franky until eventually permanently discarding his true name per the request of Iceburg to hide his identity.
              Originally from the South Blue, Franky was abandoned by his family as a four-year-old, eventually making his way to Water 7. There, he came to be a member of Toms Workers,
              until an incident resulted in his body being heavily damaged and requiring him to augment himself into a cyborg.
              Upon returning to Water 7, he became the leader of the Franky Family, a group of ship dismantlers and bounty hunters.</p>
          </div>
          <img className='poster' src="../src/images/franky.webp" alt="" />
        </div>
        <div className='flex-container'>
          <div>
          <h3 onClick={this.hide}>Brook</h3>
            <p>Brook ate the Yomi Yomi no Mi, which allowed him to return to life after death once.
              Brook eventually learned to tap deeper into the powers of his Devil Fruit, giving him significant control over his own soul and the souls of others.</p>
          </div>
          <img className='poster' src="../src/images/brook.webp" alt="" />
        </div>
        </nav>
      </div>
    </div>
    );
  }
}
