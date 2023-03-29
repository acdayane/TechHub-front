import { Grid, Card } from '@/styles/ComponentsStyle'
import React, { InputHTMLAttributes } from 'react';

export default function BoxGrid() {
    return (
        <Grid>
        <Card>
  
        <h2>
          Escolas <span>-&gt;</span>
        </h2>
        <p>
          Encontre instituições que oferecem cursos de tecnologia.
        </p>
      
      </Card>
      <Card>
     
        <h2>
          Cursos <span>-&gt;</span>
        </h2>
        <p>
          Veja mais detalhes e avaliações sobre os cursos.
        </p>
     
      </Card>
      <Card>
     
        <h2>
          Tecnologias&nbsp;<span>-&gt;</span>
        </h2>
        <p>
          Descubra onde você pode aprender determinado assunto.
        </p>
    
      </Card>
      </Grid>
    )
}