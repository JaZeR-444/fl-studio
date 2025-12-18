// components/sections/ProjectTemplates.tsx
import { useState, useEffect } from 'react';
import { projectTemplateService } from '@/services/projectTemplateService';
import { ProjectTemplate } from '@/types';
import { TemplateEditor } from '@/components/TemplateEditor';

export const ProjectTemplatesSection = () => {
  const [templates, setTemplates] = useState<ProjectTemplate[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<ProjectTemplate | null>(null);
  const [newTemplateName, setNewTemplateName] = useState('');
  const [newTemplateDescription, setNewTemplateDescription] = useState('');
  const [newTemplateGenre, setNewTemplateGenre] = useState('edm');
  const [newTemplateBpm, setNewTemplateBpm] = useState(120);
  const [newTemplateKey, setNewTemplateKey] = useState('C Major');
  const [importJson, setImportJson] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  // Load templates on component mount
  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = () => {
    const loadedTemplates = projectTemplateService.getAllTemplates();
    setTemplates(loadedTemplates);
  };

  const handleCreateTemplate = () => {
    if (!newTemplateName.trim()) return;

    const newTemplate = {
      name: newTemplateName,
      description: newTemplateDescription,
      genre: newTemplateGenre,
      bpm: newTemplateBpm,
      key: newTemplateKey,
      channels: [],
      mixerTracks: [],
      patterns: [],
      playlist: []
    };

    const createdTemplate = projectTemplateService.saveTemplate(newTemplate);
    setTemplates([...templates, createdTemplate]);
    resetForm();
  };

  const resetForm = () => {
    setNewTemplateName('');
    setNewTemplateDescription('');
    setNewTemplateGenre('edm');
    setNewTemplateBpm(120);
    setNewTemplateKey('C Major');
    setShowCreateForm(false);
  };

  const handleDeleteTemplate = (id: string) => {
    const success = projectTemplateService.deleteTemplate(id);
    if (success) {
      setTemplates(templates.filter(t => t.id !== id));
      if (selectedTemplate?.id === id) {
        setSelectedTemplate(null);
      }
    }
  };

  const handleExportTemplate = (id: string) => {
    try {
      const exportedJson = projectTemplateService.exportTemplate(id);
      // Create a download link
      const blob = new Blob([exportedJson], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `fl-studio-template-${id}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert('Error exporting template: ' + (error as Error).message);
    }
  };

  const handleImportTemplate = () => {
    if (!importJson.trim()) return;

    try {
      const importedTemplate = projectTemplateService.importTemplate(importJson);
      setTemplates([...templates, importedTemplate]);
      setImportJson('');
      alert('Template imported successfully!');
    } catch (error) {
      alert('Error importing template: ' + (error as Error).message);
    }
  };

  const handleTemplateSelect = (template: ProjectTemplate) => {
    setSelectedTemplate(template);
  };

  const handleEditTemplate = (template: ProjectTemplate) => {
    setSelectedTemplate(template);
    setShowEditor(true);
  };

  const handleSaveTemplate = (updatedTemplate: ProjectTemplate) => {
    projectTemplateService.updateTemplate(updatedTemplate);
    setTemplates(templates.map(t => t.id === updatedTemplate.id ? updatedTemplate : t));
    setShowEditor(false);
  };

  // Common genres for the dropdown
  const genres = [
    'edm', 'trap', 'hiphop', 'pop', 'rock', 'lofi', 'rnb', 'dubstep',
    'trance', 'house', 'techno', 'drum & bass', 'ambient', 'experimental'
  ];

  // Common keys for the dropdown
  const keys = [
    'C Major', 'C Minor', 'C# Major', 'C# Minor', 'D Major', 'D Minor',
    'D# Major', 'D# Minor', 'E Major', 'E Minor', 'F Major', 'F Minor',
    'F# Major', 'F# Minor', 'G Major', 'G Minor', 'G# Major', 'G# Minor',
    'A Major', 'A Minor', 'A# Major', 'A# Minor', 'B Major', 'B Minor'
  ];

  return (
    <section id="project-templates" className="page-section">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-white">Project Templates</h2>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
          >
            {showCreateForm ? 'Cancel' : 'Create Template'}
          </button>
        </div>

        {showCreateForm && (
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6 mb-8">
            <h3 className="text-lg font-bold text-stone-800 dark:text-white mb-4">Create New Template</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Name</label>
                <input
                  type="text"
                  value={newTemplateName}
                  onChange={(e) => setNewTemplateName(e.target.value)}
                  className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Template name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Genre</label>
                <select
                  value={newTemplateGenre}
                  onChange={(e) => setNewTemplateGenre(e.target.value)}
                  className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">BPM</label>
                <input
                  type="number"
                  value={newTemplateBpm}
                  onChange={(e) => setNewTemplateBpm(Number(e.target.value))}
                  className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  min="1"
                  max="300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Key</label>
                <select
                  value={newTemplateKey}
                  onChange={(e) => setNewTemplateKey(e.target.value)}
                  className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {keys.map(key => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Description</label>
                <textarea
                  value={newTemplateDescription}
                  onChange={(e) => setNewTemplateDescription(e.target.value)}
                  className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Describe your template..."
                  rows={3}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCreateTemplate}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
              >
                Create Template
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {templates.map(template => (
            <div
              key={template.id}
              className={`bg-white dark:bg-zinc-800 rounded-xl shadow-md border-2 ${
                selectedTemplate?.id === template.id
                  ? 'border-orange-500'
                  : 'border-stone-200 dark:border-zinc-700'
              } overflow-hidden transition-all hover:shadow-lg cursor-pointer`}
              onClick={() => handleTemplateSelect(template)}
            >
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-stone-800 dark:text-white truncate">{template.name}</h3>
                  <span className="text-xs px-2 py-1 bg-stone-100 dark:bg-zinc-700 text-stone-600 dark:text-zinc-300 rounded">
                    {template.genre}
                  </span>
                </div>
                <p className="text-sm text-stone-600 dark:text-zinc-400 mt-2 line-clamp-2">{template.description}</p>

                <div className="flex justify-between mt-4 text-sm">
                  <span className="text-stone-500 dark:text-zinc-400">{template.bpm} BPM</span>
                  <span className="text-stone-500 dark:text-zinc-400">{template.key}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-100 dark:border-zinc-700 flex justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExportTemplate(template.id);
                    }}
                    className="text-xs text-stone-500 dark:text-zinc-400 hover:text-stone-700 dark:hover:text-zinc-300"
                  >
                    Export
                  </button>
                  <div className="space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditTemplate(template);
                      }}
                      className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded hover:bg-orange-200 dark:hover:bg-orange-800/40"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // For now, just alert that the template would be loaded
                        alert(`Would load template: ${template.name}\n\nThis would open FL Studio and load this template structure.`);
                      }}
                      className="text-xs bg-stone-200 dark:bg-zinc-700 text-stone-700 dark:text-zinc-300 px-2 py-1 rounded hover:bg-stone-300 dark:hover:bg-zinc-600"
                    >
                      Load
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTemplate(template.id);
                      }}
                      className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded hover:bg-red-200 dark:hover:bg-red-800/40"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {templates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-600 dark:text-zinc-400">No templates created yet. Create your first template to get started!</p>
          </div>
        )}

        {/* Import Template Section */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
          <h3 className="text-lg font-bold text-stone-800 dark:text-white mb-4">Import Template</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">
                Paste Template JSON
              </label>
              <textarea
                value={importJson}
                onChange={(e) => setImportJson(e.target.value)}
                className="w-full p-3 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono text-xs"
                placeholder="Paste exported template JSON here..."
                rows={6}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">
                How to Import
              </label>
              <ul className="text-sm text-stone-600 dark:text-zinc-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Export a template from another instance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Paste the JSON in the field</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Click Import to add to your templates</span>
                </li>
              </ul>
              <button
                onClick={handleImportTemplate}
                disabled={!importJson.trim()}
                className={`mt-4 px-4 py-2 rounded-lg font-medium transition-colors ${
                  importJson.trim()
                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                    : 'bg-stone-200 dark:bg-zinc-700 text-stone-500 dark:text-zinc-400 cursor-not-allowed'
                }`}
              >
                Import Template
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Template Editor Modal */}
      {showEditor && selectedTemplate && (
        <TemplateEditor
          template={selectedTemplate}
          onSave={handleSaveTemplate}
          onCancel={() => setShowEditor(false)}
        />
      )}
    </section>
  );
};