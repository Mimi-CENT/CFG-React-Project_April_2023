import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../Styles/Review.css'

const Reviews = () => {
  return (
    <div>

      {/* Heading  */}
      <div class="review-heading">
        <span>Real Reviews From Real Clients at Kays Delicacies</span>
      </div>

      <div className='review-container'>

        {/* 
          AiFillStart - filled star
          AiOutlineStar - empty star
        */}

        {/* Box 1 */}
        <div className='review-box'>
          <div className='profile'>
            {/* profile image */}
            <div className='profile-image'>
              <img src="../Images/Reviews/Smiling young man.jpeg" alt="cartoon smiling young man"/>
            </div>
            {/* name and username */}
            <div className='name-user'>
              <strong>John Young</strong>
              <span>@youngjohnweb</span>
            </div>
            {/* reviews */}
            <div className='reviews'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          {/* Comments */}
          <div class="client-comment">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellendus earum! Repellat alias eligendi magni nostrum modi unde dolor ratione ad velit nemo, quia itaque delectus, cupiditate, magnam quidem debitis!</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className='review-box'>
          <div className='profile'>
            {/* profile image */}
            <div className='profile-image'>
              <img src="../Images/Reviews/Smiling young woman.png" alt="cartoon smiling young woman"/>
            </div>
            {/* name and username */}
            <div className='name-user'>
              <strong>Anna Long</strong>
              <span>@anna_long</span>
            </div>
            {/* reviews */}
            <div className='reviews'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          {/* Comments */}
          <div class="client-comment">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellendus earum! Repellat alias eligendi magni nostrum modi unde dolor ratione ad velit nemo, quia itaque delectus, cupiditate, magnam quidem debitis!</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className='review-box'>
          <div className='profile'>
            {/* profile image */}
            <div className='profile-image'>
              <img src="../Images/Reviews/Smiling young woman 2.jpeg" alt="cartoon smiling young woman"/>
            </div>
            {/* name and username */}
            <div className='name-user'>
              <strong>Jess Paul</strong>
              <span>@jesspaulweb</span>
            </div>
            {/* reviews */}
            <div className='reviews'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          {/* Comments */}
          <div class="client-comment">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellendus earum! Repellat alias eligendi magni nostrum modi unde dolor ratione ad velit nemo, quia itaque delectus, cupiditate, magnam quidem debitis!</p>
          </div>
        </div>
     </div> 

    </div>
  )
}

export default Reviews