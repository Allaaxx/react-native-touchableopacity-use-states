import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

interface Tarefa {
    id: string;
    title: string;
}

export const Home = () => {

    {/*[] - array*/}
    const [newTask, setNewTask] = React.useState('');
    const [tarefas, setTarefas] = React.useState<Tarefa[]>([]);

        const adcTarefa = () => {
            const dados = {
                    id: String(new Date().getTime()),
                    title: newTask ? newTask : 'Registro vazio',
                };
                setTarefas([...tarefas, dados]);
                setNewTask('');
            };
        
        const removerTarefa = (id: string) => {
            const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id);
            setTarefas(tarefasAtualizadas);
        }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tarefas do dia</Text>
            <TextInput onChangeText={setNewTask}
            value={newTask}
            placeholderTextColor='#555'
            placeholder="Tarefas"
            style={styles.fields} />
            <TouchableOpacity onPress={adcTarefa} activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Lista de tarefas</Text>

            {/*Scrollbar*/}
            {/*<ScrollView>
                {tarefas.map((tarefa : Tarefa) => (
                    <TouchableOpacity key={tarefa.id}>
                        <Text style={styles.buttonText}>{tarefa.title}</Text>
                    </TouchableOpacity>
                ))}
                </ScrollView>*/}

            <FlatList
                data={tarefas}
                keyExtractor={(item: Tarefa) => item.id}
                renderItem={({item} : {item: Tarefa}) => (
                    <TouchableOpacity
                    style={styles.renderList}
                    onPress={() => removerTarefa(item.id)}>
                        <Text style={styles.buttonText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121214',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        color: '#f1f1f1',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 15,
    },
    fields: {
        backgroundColor: '#29292e',
        color: '#f1f1f1',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7,
        width: 300,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'rgb(192, 192, 192)',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        width: 300,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
    },
    renderList:{
        backgroundColor:'rgb(19, 192, 192)',
        padding: 10,
        borderRadius: 10,
    }
  });
  