import styles from '@/styles/Home.module.css'

export default function Info() {

    return (
        <div className={styles.containerLeft}>
            <p>Informações coletadas em março de 2023.</p>          
            <div className={styles.info}>
                <p>* O menor valor corresponde ao valor do curso à vista mencionado no site da escola. O maior valor está sujeito a taxas de financiamento. Atente-se às condições contratuais.</p>        
                <p>** Modelo de Sucesso Compartilhado: O aluno só paga a partir de determinada renda mínima. Verifique regras, valores e acréscimos diretamente com a escola. </p>  
             </div>      
        </div>       
    )
}