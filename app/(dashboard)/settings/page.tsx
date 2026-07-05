import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your workspace and application preferences.</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize the look and feel of QubiMind.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">Theme</label>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="justify-start">Light</Button>
                <Button variant="outline" className="justify-start">Dark</Button>
                <Button variant="outline" className="justify-start">System</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Configure how you receive alerts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {['Email notifications', 'Push notifications', 'Weekly digest'].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-medium">{item}</h4>
                  <p className="text-xs text-muted-foreground">Receive updates via {item.toLowerCase()}</p>
                </div>
                <div className="w-9 h-5 bg-primary rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-primary-foreground rounded-full absolute right-0.5 top-0.5" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="border-red-500/20">
          <CardHeader>
            <CardTitle className="text-red-500">Danger Zone</CardTitle>
            <CardDescription>Irreversible destructive actions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-sm font-medium">Delete Account</h4>
                <p className="text-xs text-muted-foreground">Permanently delete your account and all data</p>
              </div>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
