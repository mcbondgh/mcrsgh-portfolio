
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const contactInfo = [
    { 
      icon: <Mail className="h-5 w-5 text-ghana-gold" />, 
      title: "Email",
      value: "developer@example.com",
      link: "mailto:developer@example.com"
    },
    { 
      icon: <Phone className="h-5 w-5 text-ghana-gold" />, 
      title: "Phone",
      value: "+233 XX XXX XXXX",
      link: "tel:+233000000000"
    },
    { 
      icon: <MapPin className="h-5 w-5 text-ghana-gold" />, 
      title: "Location",
      value: "Accra / Koforidua, Ghana",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="bg-black section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-[2px] bg-ghana-gold"></div>
            <p className="text-ghana-gold font-medium">Get In Touch</p>
            <div className="w-10 h-[2px] bg-ghana-gold"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Me</h2>
          <p className="text-gray-300">
            Let's discuss how I can help bring your project ideas to life. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-1 lg:col-span-2 bg-zinc-900 border-none">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white text-sm">Your Name</label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-ghana-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white text-sm">Your Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-ghana-gold"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-white text-sm">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-ghana-gold"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white text-sm">Your Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-ghana-gold resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-ghana-gold text-black hover:bg-ghana-gold/90 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"} 
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-zinc-900 border-none card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{item.title}</h3>
                      <a 
                        href={item.link} 
                        className="text-gray-400 hover:text-ghana-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-gradient-to-br from-ghana-red via-ghana-gold to-ghana-green border-none card-hover text-center p-8">
              <CardContent className="p-0">
                <h3 className="text-white font-bold text-xl mb-4">Let's Work Together</h3>
                <p className="text-white/90 mb-6">
                  Ready to bring your project ideas to life? I'm available for freelance work and consultations.
                </p>
                <Button className="bg-white text-black hover:bg-white/90">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
