import React from 'react';
import { View, Text } from 'react-native';

export default function Contacts({ navigation }) {
    return (
        <View style={{ marginTop: 60 }}>
            <View>
                <Text>Nome: João Silva</Text>
                <Text>Telefone: (11) 96589-6658</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                        {
                            nome: 'João Silva',
                            telefone: '(11) 96589-6658',
                            endereco: 'Rua das Flores',
                            numero: '769',
                            profissao: 'Carpinteiro',
                            email: 'joaosilva@carpinteiro.com.br'
                        }
                        )}
                > Information...</Text >
            </View >
            <View style={{ marginTop: 20 }}>
                <Text>Nome: Amanda Silva</Text>
                <Text>Telefone: (11) 98966-6658</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                    {
                        nome: 'Amanda Silva',
                        telefone: '(11) 98966-6658',
                        endereco: 'Av. Estrela Nova',
                        numero: '3658',
                        profissao: 'Desenvolvedora de softawares',
                        email: 'amanda.dev.code@amandadev.com.br'
                    }
                    )}
                >Information...</Text>
            </View>
        </View >
    )
}

