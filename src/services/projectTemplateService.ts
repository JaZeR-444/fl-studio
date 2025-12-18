// services/projectTemplateService.ts
import { ProjectTemplate } from '@/types';

class ProjectTemplateService {
  private storageKey = 'fl-studio-templates';

  // Get all saved templates
  getAllTemplates(): ProjectTemplate[] {
    if (typeof window === 'undefined') return [];
    
    const templates = localStorage.getItem(this.storageKey);
    if (!templates) return [];
    
    try {
      const parsed = JSON.parse(templates);
      // Convert date strings back to Date objects
      return parsed.map((template: any) => ({
        ...template,
        dateCreated: new Date(template.dateCreated),
        dateModified: new Date(template.dateModified)
      }));
    } catch (error) {
      console.error('Error parsing templates from localStorage:', error);
      return [];
    }
  }

  // Save a new template
  saveTemplate(template: Omit<ProjectTemplate, 'id' | 'dateCreated' | 'dateModified'>): ProjectTemplate {
    const templates = this.getAllTemplates();
    const newTemplate: ProjectTemplate = {
      ...template,
      id: this.generateId(),
      dateCreated: new Date(),
      dateModified: new Date()
    };
    
    templates.push(newTemplate);
    this.saveAllTemplates(templates);
    return newTemplate;
  }

  // Update an existing template
  updateTemplate(template: ProjectTemplate): ProjectTemplate {
    const templates = this.getAllTemplates();
    const index = templates.findIndex(t => t.id === template.id);
    
    if (index !== -1) {
      templates[index] = { ...template, dateModified: new Date() };
      this.saveAllTemplates(templates);
      return templates[index];
    }
    
    throw new Error(`Template with id ${template.id} not found`);
  }

  // Delete a template
  deleteTemplate(templateId: string): boolean {
    const templates = this.getAllTemplates();
    const filtered = templates.filter(template => template.id !== templateId);
    
    if (filtered.length === templates.length) {
      return false; // Template not found
    }
    
    this.saveAllTemplates(filtered);
    return true;
  }

  // Get a specific template by ID
  getTemplateById(templateId: string): ProjectTemplate | undefined {
    return this.getAllTemplates().find(template => template.id === templateId);
  }

  // Export template as JSON
  exportTemplate(templateId: string): string {
    const template = this.getTemplateById(templateId);
    if (!template) {
      throw new Error(`Template with id ${templateId} not found`);
    }
    return JSON.stringify(template, null, 2);
  }

  // Import template from JSON
  importTemplate(jsonString: string): ProjectTemplate {
    try {
      const parsed = JSON.parse(jsonString);
      const newTemplate: ProjectTemplate = {
        ...parsed,
        id: this.generateId(),
        dateCreated: new Date(),
        dateModified: new Date()
      };
      
      // Save the imported template
      const templates = this.getAllTemplates();
      templates.push(newTemplate);
      this.saveAllTemplates(templates);
      
      return newTemplate;
    } catch (error) {
      throw new Error('Invalid template JSON format');
    }
  }

  // Helper to save all templates to localStorage
  private saveAllTemplates(templates: ProjectTemplate[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(templates));
    }
  }

  // Generate a unique ID
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }
}

export const projectTemplateService = new ProjectTemplateService();