import { Button } from "./ui/button";

interface SubmitButtonProps {
    isLoading: boolean;
    className?: string;
    children?: React.ReactNode
}

export default function SubmitButton({ isLoading, className, children }: SubmitButtonProps) {
    return <Button type="submit" disabled className={className ?? 'shad-primary-btn w-full'}></Button>
}