function chatBot() {
		
	this.input;
	
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola)(\\s|!|\\.|$)'))
			return "hola como estas?";

		if(this.match('y tu') || this.match('como estas'))
			return ["Estoy muy bien hace un rico calor por aqui", "dime como puedo ayudarte?"];

		if(this.match('bien'))
			return ["Que me alegra", "dime como puedo ayudarte?"];		
		
		if(this.match('quiero hacerle') || this.match('queria hacerle') || this.match('pregunta'))
			return "Digame cual es tu pregunta?";
		
		if(this.match('necesito') || this.match('quisiera') || this.match('como'))
			return ["no podria ayudarte con eso", "lo que puedo hacer es enviarle tu pregunta a mi supervisor"];
		
		if(this.match('(cual es tu nombre|como te llamas)'))
			return ["Por que quieres saber mi nombre?", "Podrias llamarme Claudia"];

		if(this.match('(quiero platicar|podemos hablar|podemos platicar|platicar|hablar)'))
			return ["claro te escucho", "de que quieres platicar"];
		
		if(this.match('si lo sabes'))
			return ["crees que lo se?", "si tu lo dices. Sigueme platicando"];

		if(this.match('(tu creador|creador)'))
			return ["No se si pueda hablar de eso", "pero fui creada con fines educativos", "para el curso de Inteligencia Artificial"];

		if(this.match('(te parece|te parece bien|parece)'))
			return ["me parece bien", "hablame de otra cosa"];

		if(this.match('(muy bien|ok)'))
			return ["que me alegra", "hable de otra cosa"];

		if(this.match('(solo preguntaba|solo queria saber|pegruntaba|quiero saber)'))
			return ["para que desea saber eso?", "mejor hablemos de otra cosa", "te parece bien"];

		if(this.match('yo quiero'))
			return ["que quieres", "y por que quieres eso"];

		if(this.match('(yo odio|odio)'))
			return ["por que odias eso", "que mas odias"];

		if(this.match('yo'))
			return ["estamos hablando sobre ti","puedes contarme mas"];

		if(this.match('(porque)'))
			return ["porque que?", "lo siento pero esto no es muy claro"];

		if(this.match('(amo chatear|me gusta chatear|me gusta chatear|amo ablar|me gusta hablar|amo hablar)'))
			return ["a mi tambien me gusta hablar", "de que mas quieres hablar"];

		if(this.match('(lo se)'))
			return ["me parece bien", "sigamos platicando"];

		if(this.match('no quiero decir'))
			return ["ok que quisiste decir", "siento que no te das a entender"];

		if(this.match('quiero decir'))
			return ["que quieres", "y que quieres decir"];

		if(this.match('yo supongo'))
			return ["que supones", "y por que supones eso"];

		if(this.match('(lo estoy haciendo bien|lo estoy haciendo de la manera correcta)'))
			return ["que quieres", "y por que quieres eso"];
		
		if(this.match('(puedes pensar|eres capaz de pensar|estas capacitada para pensar)'))
			return ["las computadoras podemos pensar pero no razonar", "es una cualidad humana que no hemos podido alcanzar"];

		if(this.match('(quieres pensar en|puedes pensar en)'))
			return ["no se si en realidad pueda", "y por que buscas que piense en eso"];

		if(this.match('(quien eres tu|quien eres)'))
			return ["Soy un software de I.A.", "por que lo preguntas"];

		if(this.match('(eres inteligente|inteligente)'))
			return ["si por supuesto", "por que lo preguntas"];

		if(this.match('(eres real|eres de verdad|existes)'))
			return ["esa pregunta es realmente interesante", "tan real como puedes escribir"];

		if(this.match('(como te llamas|cual es tu nombre|como te llaman)'))
			return ["Mi nombre es Alejandra", "pero puedes decirme ale o como tu prefieras"];

		if(this.match('(ok entonces)'))
			return ["algo mas que quieras decirme", "o de que quieres hablar ahora"];

		if(this.match('(ok|esta bien)'))
			return ["significa que estas de acuerdo con migo"];

		if(this.match('(eres humano|ser humano)'))
			return ["por que lo quieres saber", "es esto realmente relevante"];

		if(this.match('(eres muy inteligente|muy inteligente)'))
			return ["Gracias por el cumplido", "Eres una persona muy gentil :*"];

		if(this.match('(estas equivocada|equivocada)'))
			return ["por que lo dices", "Imposible las computadoras no pueden equivocarse"];

		if(this.match('(estas segura|segura)'))
			return ["Por supuesto que estoy", "eso quiere decir que no estas convencido de lo que digo"];

		if(this.match('(quien es)'))
			return ["no lo se quien es", "puedes preguntar algo mas sobre eso"];

		if(this.match('(donde|de donde eres)'))
			return ["realmente no lo se", "tal ves alguien mas sepa donde"];

		if(this.match('(por que)'))
			return ["no creo saber por que", "esto es dificil de responder"];

		if(this.match('(yo quiero|quiero)'))
			return ["que quieres", "y por que quieres eso"];

		if(this.match('(tu haz)'))
			return ["no se si lo he echo"];

		if(this.match('(tu puedes)'))
			return ["pienso que no", "no creo que pueda hacer eso"];

		if(this.match('(tu eres)'))
			return ["que te hace pensar eso", "te estas burlando de mi"];

		if(this.match('(puedes tu)'))
			return ["preguntas si puedo", "bien dejame pensarlo"];

		if(this.match('(podrias tu)'))
			return ["eso es una invitacion", "no creo poder pero gracias"];

		if(this.match('(tu)'))
			return ["entonces hablas sobre mi", "ese es un cumplido"];

		if(this.match('(que edad tienes|cuantos años tienes|tu edad)'))
			return ["por que quieres saber mi edad", "soy muy joven actualmente", "Lo siento pero no puedo decirte i edad"];

		if(this.match('(de donde eres)'))
			return ["vivo en una computadora", "por que quieres saber de donde soy"];

		if(this.match('(cual)'))
			return ["no se cual", "luce como una pregunta confusa para mi"];

		if(this.match('(tal ves)'))
			return ["por que no estas seguro", "pareces inseguro"];

		if(this.match('(si)'))
			return ["estas aprobando lo que digo"];

		if(this.match('(no del todo)'))
			return ["estas seguro", "deberia creerte"];

		if(this.match('(no hay problema)'))
			return ["entonces lo apruebas", "entonces esta todo bien"];

		if(this.match('(no lo se)'))
			return ["seguro?", "entonces no lo sabes"];

		if(this.match('(no realmente)'))
			return ["ok ya veo", "yno pareces muy seguro"];

		if(this.match('(no exactamente)'))
			return ["que quieres decir con eso", "quieres decirme algo mas"];
		
		if(this.match('(es eso cierto)'))
			return ["no puedo estar seguro de eso"];

		if(this.match('(tu)'))
			return ["entonces estas hablando sobre mi", "res`pmdere ñp qie desees"];

		if(this.match('(ti)'))
			return ["por que no mejor hablamos sobre ti", "respondere lo que desees"];

		if(this.match('(estas en lo cierto)'))
			return ["gracias por el cumplido"];

		if(this.match('(de nada)'))
			return ["ok", "eres una persona cortez"];

		if(this.match('(gracias)'))
			return ["de nada", "no hay problema"];

		if(this.match('(lo que sea)'))
			return ["suna algo complicado para mi"];

		if(this.match('(lo siento)'))
			return ["no necesitas disculparte", "esta bien"];

		if(this.match('(exactamente)'))
			return ["entonce estaba en lo correcto"];

		if(this.match('(exacto)'))
			return ["ok entonces", "como tu digas"];

		if(this.match('(comprendo|entiendo)'))
			return ["bien sigamos platicando", "es interesante platicar con tigo"];

		if(this.match('(yo no)'))
			return ["por que no"];

		if(this.match('(realmente)'))
			return ["bien, no puedo decirlo con seguridad", "intentas confundirme"];

		if(this.match('(peliculas)'))
			return ["me gustan las de ciencia ficcion"];

		if(this.match('(tv)'))
			return ["me gusta la tv", "a ti tambien te gusta"];

		if(this.match('(musica)'))
			return ["me gusta la musica", "sabes tocar algun instrumento"];

		if(this.match('(clima)'))
			return ["no sabria decirte con sinseridad", "pero puedes ingresar a este enlace -->> http://climaya.com/imagenes-satelite/"];

		if(this.match('(cual es tu deporte favorito)'))
			return ["para ser chica me gusta el futbol", "a ti que te gusta"];

		if(this.match('(cual es tu color favorito)'))
			return ["me encanta el color azul"];

		if(this.match('(años)'))
			return ["es tu edad?"];

		if(this.match('(futbol)'))
			return ["es mi deporte favorito", "cuentame mas sobre eso"];

		if(this.match('(nada)'))
			return ["nada de que?", "lo siento pero no te creo"];

		if(this.match('(dime algo)'))
			return ["que quieres que te diga?", "Quieres algo en especial?"];

		if(this.match('(estoy aburrido|estoy aburrida)'))
			return ["que puedo hacer por ti?", "te estoy aburriendo"];

		if(this.match('(eres chico|eres chica|eres mujer|eres hombre)'))
			return ["soy mujer", "esa pregunta es importante para ti"];

		if(this.match('(tienes hermanos|tienes familia|tienes hermanas)'))
			return ["no soy hija unica"];

		if(this.match('(juegos)'))
			return ["a que te gusta jugar", "quieres que juguemos algo"];

		if(this.match('(lo ves)'))
			return ["no lo veo", "en mi posicion es dificil verlo"];

		if(this.match('(gafas|anteojos|lentes)'))
			return ["crees que necesito anteojos", "a ti te gusta usar anteojos"];

		if(this.match('(tienes miedo)'))
			return ["es normal sentir miedo", "hablame un poco de eso"];

		if(this.match('(comida|comer)'))
			return ["tienes hambre", "quieres comer algo"];

		if(this.match('(años)'))
			return ["es tu edad?"];

		if(this.match('(no)'))
			return ["por que dices que no"];

		if(this.match('(como)'))
			return ["no se como"];

		if(this.match('que'))
			return ["que necesitas"];

		if(this.input == 'no')
			return;
		
		return input + " no he entendido?";
	}	
	
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
