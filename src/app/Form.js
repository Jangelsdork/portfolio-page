

export default function Form() {
   function handleClick(event){
    event.preventDefault()
    }


    return (
      <div>
        <section className="form-container">
        <form action="#" method="POST" enctype="multipart/form-data">
    
            <div className="form-block">
            <label for="fc-generated-1-name">Your Full Name</label>
            <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
            </div>
        
            <div className="form-block">
            <label for="fc-generated-1-email">Your Email Address</label>
            <input type="email" name="email" id="fc-generated-1-email" placeholder="john@doe.com" />
            </div>
        
            <div className="form-block">
            <label for="fc-generated-1-message">Your message</label>
            <textarea name="message" name="message" id="fc-generated-1-message" placeholder="Enter your message..."></textarea>
            </div>
        
            <div className="form-block">  
            <button onClick={handleClick} type="">Send</button>
            </div>
  
        </form>
        </section>
      </div>
    )
  }
  