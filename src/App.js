import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Container, Subtitle, Title } from './style';
import Input from './components/Input';
import Button from './components/Button';

function App() {

  const [totalHorasDia, setTotalHorasDia] = useState('');

  const calculaHoras = (data, setSubmitting) => {
    const {
      valor_total,   
      valor_hora,    
      total_dias_mes 
    } = data;

    const valor_total_dia = valor_total/total_dias_mes;
    const total_horas = (valor_total_dia/valor_hora).toFixed(2);

    const totalSeconds = total_horas * 3600; // Convert decimal time to seconds
    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = Math.round(remainingSeconds % 60);

    setTotalHorasDia(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
    setSubmitting(false)
  }

  return (
    <div className="App">
      <Container>

      
        <Title>TIME IS MONEY</Title>
        <Subtitle>Calcule o seu tempo</Subtitle>


        <Formik
          initialValues={{ 
            valor_total: '',
            valor_hora: '',
            total_dias_mes: ''
          }}
          validate={values => {
            const errors = {};

            if (!values.valor_total) {
              errors.valor_total = true;
            }
            
            if (!values.valor_hora) {
              errors.valor_hora = true;
            }
            
            if (!values.total_dias_mes) {
              errors.total_dias_mes = true;
            }

            return errors;
          }}

          onSubmit={(values, { setSubmitting }) => {
            calculaHoras(values, setSubmitting)
          }}
        >
          {({
            values,
            errors,
            handleChange,
            isSubmitting,
          }) => (
            <Form>
                <Input
                  type="number"
                  name="valor_total"
                  value={values.valor_total}
                  onChange={handleChange}
                  placeholder='Valor desejado no fim do mês'
                  error={errors.valor_total}
                />

                <Input
                  type="number"
                  name="valor_hora"
                  value={values.valor_hora}
                  onChange={handleChange}
                  placeholder='Valor da sua hora de tarabalho'
                  error={errors.valor_hora}
                />

                <Input
                  type="number"
                  name="total_dias_mes"
                  value={values.total_dias_mes}
                  onChange={handleChange}
                  placeholder='Total de dias que vai trabalhar no mês'
                  error={errors.total_dias_mes}
                />

                <Button type="submit" disabled={isSubmitting} value='Calcular' />
                  
                
            </Form>
          )}
        </Formik>

        {totalHorasDia  && (
          <div className='result'>
            <label className='text'>Você precisa trabalhar por dia</label>
            <label className='time'>{totalHorasDia}</label>
            <label className='text'>Boa sorte!</label>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
