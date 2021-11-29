class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA(notaFinal) {        
        if(notaFinal === 0){
            return "SR - Sem rendimento!";
        }else if (notaFinal >= 0.1 && notaFinal <= 2.9){
            return "II - Inferior"
        }else if(notaFinal >=3.0 && notaFinal <= 4.9) {
            return "MI- Média Inferior"
        }else if (notaFinal >= 5.0 && notaFinal <= 6.9){
            return "MM - Média minima"
        }else if (notaFinal >= 7 && notaFinal <= 8.9) {
            return "MS- Média Superior"
        }else if (notaFinal >= 9.0 && notaFinal <=10) {
            return "SS – Superior"
        }else {
            return "Nota inválida"
        }
    }
}

module.exports = Nota;