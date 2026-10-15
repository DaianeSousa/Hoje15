function Greetings({nome,mensagem = "seja bem vindo"}) {
    return(
        <div className="greeting">
            <span className="Greting_eyebrow">React - Primeiros Passos</span>
            <h1>{nome}, {mensagem}</h1>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quisquam repellendus reprehenderit
                quo, voluptatibus iure eum corrupti ipsum magni similique 
                iste eos minima in omnis tempora officia quasi dolorum
                ea ratione?</p>

        </div>  
    );
}
export default Greetings;
