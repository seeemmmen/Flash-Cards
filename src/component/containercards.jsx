import quastions from "../data/quastions.jsx";




export default function Containercards(id) {

    return (
      <>
          <div className="containercards">
              {id.answer?quastions[id.id].question:quastions[id.id].answer}
          </div>


      </>
    );
}