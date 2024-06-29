interface ModelSelectorProps {
    selectedModel: string;
    setSelectedModel: (model: string) => void;
    selectedTask: string;
    setSelectedTask: (task: string) => void;
  }
  
  export default function ModelSelector({ selectedModel, setSelectedModel, selectedTask, setSelectedTask }: ModelSelectorProps) {
    const models = ['Strawberry', 'Grapes', 'Apple', 'Tomato', 'Weeding', 'Custom'];
    const tasks = ['Detection', 'Segmentation'];
  
    return (
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Select or upload a model</h2>
        <select 
          value={selectedModel} 
          onChange={(e) => setSelectedModel(e.target.value)}
          className="mb-2 text-black p-2 border rounded"
        >
          {models.map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
        <p>You selected: {selectedModel} Model</p>
  
        <h2 className="text-xl font-bold mb-2">Select a task</h2>
        <select 
          value={selectedTask} 
          onChange={(e) => setSelectedTask(e.target.value)}
          className="mb-2 text-black p-2 border rounded"
        >
          {tasks.map(task => (
            <option key={task} value={task}>{task}</option>
          ))}
        </select>
        <p>You selected: {selectedTask} mode</p>
      </div>
    );
  }