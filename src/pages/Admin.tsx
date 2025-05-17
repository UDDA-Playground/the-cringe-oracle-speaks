
import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [seoData, setSeoData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check if user is authorized
  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          toast({
            title: "Authentication required",
            description: "Please log in to access the admin area",
            variant: "destructive",
          });
          navigate('/');
          return;
        }
        
        // Check if user has admin role
        const { data: roles } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .eq('role', 'admin');
          
        if (!roles || roles.length === 0) {
          toast({
            title: "Access Denied",
            description: "You don't have permission to access the admin area",
            variant: "destructive",
          });
          navigate('/');
          return;
        }
        
        setIsAdmin(true);
        fetchSeoData();
      } catch (error) {
        console.error('Error checking admin status:', error);
        toast({
          title: "Error",
          description: "Failed to verify your permissions",
          variant: "destructive",
        });
        navigate('/');
      }
    };
    
    checkAdminStatus();
  }, [navigate]);
  
  // Fetch SEO data
  const fetchSeoData = async () => {
    try {
      const { data, error } = await supabase
        .from('seo_metadata')
        .select('*');
        
      if (error) throw error;
      setSeoData(data || []);
    } catch (error) {
      console.error('Error fetching SEO data:', error);
      toast({
        title: "Error",
        description: "Failed to load SEO data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // If not admin or still checking, show loading
  if (!isAdmin || loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">SEO Management</h1>
      
      <Table>
        <TableCaption>A list of SEO metadata for your pages</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Page Path</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Meta Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {seoData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.page_path}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.meta_description.substring(0, 50)}...</TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {/* Edit function */}}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Add form for new SEO entry would go here */}
    </div>
  );
};

export default Admin;
