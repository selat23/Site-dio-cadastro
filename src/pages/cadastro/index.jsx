import React from 'react'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { MdAccountCircle, MdEmail, MdLock } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { Container, Column, TitleCadastro, Wrapper, Title, SubtitleLogin, EsqueciText, CriarText, RowSubtitle, RowUnderButton } from './styles'


export const Cadastro = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {

        } catch (e) {

        }
    }


    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis</TitleCadastro>
                        <SubtitleLogin  >Crie sua conta e make the change</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Nome completo" leftIcon={<MdAccountCircle />} name="senha" control={control} />
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} size={16} name="email" control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                            {errors.senha && <span>Senha é obrigatório</span>}
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                            <RowUnderButton>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius perspiciatis temporibus facer
                            </RowUnderButton>
                        </form>
                        <RowSubtitle>
                            <EsqueciText>Já tenho conta.</EsqueciText>
                            <CriarText>Fazer login</CriarText>
                        </RowSubtitle>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}
